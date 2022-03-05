package com.myself.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @Author Gaoxz
 * @CreateTiime 2022-03-05 10:38
 * @apiNote
 */
@RestController
public class Controller001 {

    @RequestMapping("/test01")
    @CrossOrigin     //需添加@CrossOrigin使用该方法能够被跨域访问
    public String test01(){
        return "你好！";
    }
}
