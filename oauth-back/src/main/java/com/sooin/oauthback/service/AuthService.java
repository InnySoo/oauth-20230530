package com.sooin.oauthback.service;

import org.springframework.http.ResponseEntity;

import com.sooin.oauthback.dto.request.auth.SignUpRequestDto;
import com.sooin.oauthback.dto.response.auth.SignUpResponseDto;

public interface AuthService {

  ResponseEntity<? super SignUpResponseDto> signUp(SignUpRequestDto dto);
  
}
