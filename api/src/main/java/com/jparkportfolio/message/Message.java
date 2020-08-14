package com.jparkportfolio.message;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Message {
	@Id @GeneratedValue
	@Column(name = "message_id")
	private Long id;
	private String senderName;
	private String senderEmail;
	private String senderPnum;
	private String content;
	private LocalDateTime sendDate = LocalDateTime.now();
	
	
}
