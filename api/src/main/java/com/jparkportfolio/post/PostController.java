package com.jparkportfolio.post;

import javax.mail.MessagingException;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.jparkportfolio.common.ResponseResult;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class PostController {
	
	private final PostService postService;
	
	@PostMapping("post")
	public ResponseResult createPost(@RequestBody Post message) {
		return postService.createPost(message);
	}
	
	@GetMapping("post")
	public ResponseResult retreivePost(){
		return postService.retrievePost();
	}
}
