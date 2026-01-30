# PactumJS API Testing - PetStore

This repository demonstrates automated API testing using **PactumJS**, implementing the **Request Object Model (ROM)** pattern for better maintainability and scalability.

## 🚀 Technologies
* **Node.js**
* **PactumJS** (REST API Testing Framework)
* **Mocha/Jest** (Test Runner)

## 🏗️ Project Structure
The project follows a modular structure to separate concerns:
* `data/`: Mock data and payloads used in tests.
* `requests/`: Contains the **Request Object Model** classes (e.g., `pet.request.js`), encapsulating API endpoints and logic.
* `tests/`: Functional test suites (e.g., `pet.spec.js`) that execute the assertions.

## 🛠️ Request Object Model (ROM)
Instead of hardcoding URLs and payloads inside tests, this project uses the ROM pattern. 
Example from `pet.request.js`:
```javascript
createPet(payload) {
  return spec()
    .post('/pet')
    .withJson(payload);
}