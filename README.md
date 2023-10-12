# Pre-Production Movie Suggestion System

Welcome! This project is a user-friendly web application designed to provide ideal combinations of movie genres, directors, and actors for predicting a film's success in pre-production. By utilizing the IMDB dataset and employing machine learning techniques such as decision trees and random forests, this application aims to revolutionize the way movies are conceptualized.

## Project Overview

The project is structured into three main components:

### 1. Frontend

The `frontend` folder contains the React.js application responsible for gathering user input. Users can input their movie ideas, and the application will provide tailored suggestions based on the provided information.

### 2. Backend

The `backend` folder houses the Flask application (`main.py`) that serves as the bridge between the frontend and the machine learning models. It handles the communication, processes user input, and retrieves predictions from the trained models.

### 3. Model

The `model` folder contains a Jupyter Notebook (`Data analysis and model training.ipynb`) used for data preprocessing, analysis, and the development of machine learning models. **Important: Before running the application, ensure you run all cells in `Data analysis and model training.ipynb` to generate the necessary model files in pickle format, as they are too large to be uploaded directly to GitHub**. This notebook analyzes the IMDB dataset (`IMDB-Movie-Data.csv`) and creates four model files stored in pickle format, which are used for predictions in the backend.

## Project Setup

To get started with the Pre-Production Movie Suggestion System, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/shree-varshan-v/Pre-Production-Movie-Suggestion-System.git
   cd pre-production-movie-suggestion
   ```

2. **Setup Frontend:**

   Navigate to the `frontend` folder and install dependencies.

   ```bash
   cd frontend
   npm install
   ```

3. **Setup Backend:**

   Navigate to the `backend` folder and install Flask and required packages.

   ```bash
   cd ../backend
   pip install -r requirements.txt
   ```
4. **Run the Model Notebook:**

   Open the `Data analysis and model training.ipynb` notebook located in the `model` folder. Run all cells in the notebook to generate the model files in pickle format. These files are necessary for the application to function correctly.

5. **Run the Application:**

   Start the Flask backend by running `main.py` in the `backend` folder.

   ```bash
   python main.py
   ```

   Start the React frontend by running the following command in the `frontend` folder.

   ```bash
   npm start
   ```

   Access the application at `http://localhost:3000` in your web browser.

## Contribution Guidelines

If you would like to contribute to the Pre-Production Movie Suggestion System, please follow these guidelines:

- Fork the repository and create a new branch for your feature or bug fix.
- Ensure your code follows the project's coding standards.
- Submit a pull request detailing your changes and improvements.

## Acknowledgments

Special thanks to the IMDB dataset contributors and the open-source communities behind React, Flask, and scikit-learn for making this project possible.

Thank you for your interest in the Pre-Production Movie Suggestion System! If you have any questions or feedback, feel free to reach out.

Happy coding! 🎬🚀