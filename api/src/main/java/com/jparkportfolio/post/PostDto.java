package com.jparkportfolio.post;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class PostDto {
	private Long id;
	private String nickname;
	private String content;
	private boolean isLocked;
	private String password;
	private LocalDateTime postDate;
	
	public void setIsLocked(boolean isLocked) {
		this.isLocked = isLocked;
	}
	public boolean getIsLocked() {
		return this.isLocked;
	}
}
