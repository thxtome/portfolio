package com.jparkportfolio.message;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;

@Repository
public class MessageRepository {
	
	@PersistenceContext
	private EntityManager em;
	
	public Long save(Message message) {
		em.persist(message);
		return message.getId();
	}
	
	public Message findOne(Long id) {
		return em.find(Message.class, id);
	}
}
