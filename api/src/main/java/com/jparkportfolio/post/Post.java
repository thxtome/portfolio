package com.jparkportfolio.post;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Post {
	@Id @GeneratedValue
	@Column(name = "post_id")
	private Long id;
	private String nickname;
	private String content;
	private String isLocked;
	private String password;
	private LocalDateTime postDate = LocalDateTime.now();
}
