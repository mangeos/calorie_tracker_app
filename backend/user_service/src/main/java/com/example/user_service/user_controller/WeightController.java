package com.example.user_service.user_controller;

import com.example.user_service.services.WeightService;
import com.example.user_service.models.Weight;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/userservice.example.com/weight")
public class WeightController {

    @Autowired
    private WeightService service;

    @GetMapping
    public ResponseEntity<List<Weight>> findAllWeights(@RequestHeader("User-Id") String userId) {
        List<Weight> weights = service.findAllWeights(userId);
        if (!weights.isEmpty()) {
            return new ResponseEntity<>(weights, HttpStatus.OK);
        }
        return new ResponseEntity<>(weights, HttpStatus.NOT_FOUND);
    }

    @PostMapping
    public ResponseEntity<Weight> addWeight(@RequestBody Weight weightBody) {
        return new ResponseEntity<>(service.addWeight(weightBody), HttpStatus.OK);
    }

    @PutMapping("/{userId}/{date}/{weight}")
    public ResponseEntity<List<Weight>> updateWeight(
            @PathVariable("userId") String userId,
            @PathVariable("date") String date,
            @PathVariable("weight") String updatedWeightValue) {
        System.out.println(userId);
        System.out.println(date);
        List<Weight> updatedWeight = service.updateWeightByUserIdAndDate(userId, date,
                updatedWeightValue);

        if (updatedWeight != null) {
            return new ResponseEntity<>(updatedWeight, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/{userId}")
    public ResponseEntity<List<Weight>> deleteWeightByUserId(@PathVariable("userId") String userId) {
        List<Weight> weights = service.deleteWeightByUserId(userId);
        if (!weights.isEmpty()) {
            return new ResponseEntity<>(weights, HttpStatus.OK);
        }
        return new ResponseEntity<>(weights, HttpStatus.NOT_FOUND);
    }
}
