package com.jparkportfolio.post;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Post {
	@Id @GeneratedValue
	@Column(name = "post_id")
	private Long id;
	private String nickname;
	private String content;
	private boolean isLocked;
	private String password;
	private LocalDateTime postDate = LocalDateTime.now();
	
	public void setIsLocked(boolean isLocked) {
		this.isLocked = isLocked;
	}
	
	public boolean confirmPassword(Post post) {
		return this.password.equals(post.password);
	}
	
	public PostDto createDto(boolean contentBlind) {
		return new PostDto(id, nickname, contentBlind && isLocked ? "비밀글입니다." : content , isLocked, null, postDate);
	}
}
