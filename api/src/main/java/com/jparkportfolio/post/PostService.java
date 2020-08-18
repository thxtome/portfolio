package com.jparkportfolio.post;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jparkportfolio.common.ResponseResult;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class PostService {
	private final PostRepository postRepository;
	
	public ResponseResult createPost(Post post){
		postRepository.save(post);
		return new ResponseResult(HttpStatus.OK, "post is created");
	}

	public ResponseResult retrievePost() {
		List<Post> posts = postRepository.findAll();
		return new ResponseResult(HttpStatus.OK, posts, "posts");
	}
}
