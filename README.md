

# Task Manager API

## How to Run

1. npm install
2. npm start

## Endpoints

* POST /tasks → Create task
* GET /tasks → Get all tasks
* PATCH /tasks/:id → Mark complete

## AI Feature

Auto-priority suggestion based on keywords (urgent, asap, later)



# DECISION LOG

## Time Breakdown

* Setup: 30 mins
* API Development: 2 hours
* AI Feature: 1 hour
* Testing: 30 mins

## Where AI Was Used

* Used AI to generate API structure and fix bugs

## Where AI Was NOT Used

* Wrote priority logic manually

## Bad AI Outputs

1. AI suggested MongoDB → removed (too complex)
2. AI gave over-engineered structure → simplified

## Trade-offs

* Used in-memory storage instead of database

## Improvements

* Add authentication
* Use real AI APIs
* Add database

