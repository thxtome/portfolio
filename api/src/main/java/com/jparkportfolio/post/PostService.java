package com.jparkportfolio.post;

import java.util.List;
import java.util.stream.Collectors;

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

	public ResponseResult createPost(Post post) {
		postRepository.save(post);
		return new ResponseResult(HttpStatus.OK, "post is created");
	}

	public ResponseResult retrievePost(Integer page) {
		List<Post> posts = postRepository.findAll(page);
		List<PostDto> postDtos = posts.stream().map(p -> p.createDto(true)).collect(Collectors.toList());
		return new ResponseResult(HttpStatus.OK, postDtos, "posts");
	}

	public ResponseResult confirmPostPassword(Post post) {
		Post findPost = postRepository.findOne(post.getId());
		boolean result = findPost.confirmPassword(post);
		PostDto postDto = findPost.createDto(false);
		ResponseResult rr = new ResponseResult(HttpStatus.OK, postDto, "post");
		rr.add("result", result);
		return rr;
	}
}
