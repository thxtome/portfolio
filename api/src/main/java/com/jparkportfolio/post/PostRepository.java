package com.jparkportfolio.post;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;

@Repository
public class PostRepository {

	@PersistenceContext
	private EntityManager em;
	
	public Long save(Post post) {
		em.persist(post);
		return post.getId();
	}
	
	public Post findOne(Long id) {
		return em.find(Post.class, id);
	}
	
	public List<Post> findAll(Integer page) {
		return em.createQuery("select p from Post p order by postDate desc",Post.class).setFirstResult(page*15).setMaxResults(15).getResultList();
	}
}
