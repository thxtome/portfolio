package com.jparkportfolio.post;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;

@Repository
public class PostRepository {

	@PersistenceContext
	private EntityManager em;
	
	public Post save(Post post) {
		em.persist(post);
		return post;
	}
	
	public Post findOne(Long id) {
		return em.find(Post.class, id);
	}
	
	public List<Post> findAll(Integer page) {
		return em.createQuery("select p from Post p order by postDate desc",Post.class).setFirstResult(page*15).setMaxResults(15).getResultList();
	}
	
	public Post deleteById(Long id) {
		Post post = em.find(Post.class, id);
		em.remove(post);
		return post;
	}

	public void updateById(Post updatePost) {
		Post post = em.find(Post.class, updatePost.getId());
		updatePost.setPassword(post.getPassword());
		em.merge(updatePost);
	}
	
}
