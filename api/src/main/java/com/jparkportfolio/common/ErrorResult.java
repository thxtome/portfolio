package com.jparkportfolio.common;

import lombok.Data;

@Data
public class ErrorResult {
    private static final long serialVersionUID = 1L;
    private String errorMessage;
    private String referedUrl;

    public ErrorResult(String errorMessage, String referedUrl) {
        this.errorMessage = errorMessage;
        this.referedUrl = referedUrl;
    }
}
