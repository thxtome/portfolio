package com.jparkportfolio.post;

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
	public ResponseResult createPost(@RequestBody Post post) {
		System.out.println(post);
		return postService.createPost(post);
	}
	
	@GetMapping("post")
	public ResponseResult retreivePost(Integer page){
		return postService.retrievePost(page);
	}
	
	@PostMapping("confirmPassword")
	public ResponseResult confirmPostPassword(@RequestBody Post post){
		return postService.confirmPostPassword(post);
	}
}
