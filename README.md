
# API Service Project

This project is a simple API service built using **Node.js**, **Express**, and **MongoDB**. It integrates with dummy CRM and marketing platforms to fetch leads and campaign data, processes the data, and provides functionality to generate reports (PDF/CSV) and send email alerts.

## Features

- **Fetch Leads and Campaigns:** Simulates fetching lead and campaign data from dummy CRM and marketing services.
- **ETL Process:** Transforms and stores the raw data in MongoDB.
- **Generate Reports:** Provides endpoints to generate PDF and CSV reports.
- **Email Alerts:** Sends email notifications when specific conditions (like low lead count) are met.
  
## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup and Installation](#setup-and-installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Postman Collection](#postman-collection)
- [Contributing](#contributing)
- [License](#license)

## Tech Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Libraries:** Axios, Mongoose, PDFKit, json2csv, Nodemailer
- **Reporting:** PDF and CSV report generation
- **Alerts:** Nodemailer for email notifications

## Setup and Installation

Follow the steps below to run the project locally.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (v14.x or later)
- [MongoDB](https://docs.mongodb.com/manual/installation/) (either locally or via [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/api-service.git
    cd api-service
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
    - Create a `.env` file in the root directory.
    - Add the following variables:
      ```
      MONGO_URI=mongodb://localhost:27017/api-service
      EMAIL=your-email@gmail.com
      PASSWORD=your-email-password
      PORT=5000
      ```

4. **Start MongoDB**:
   If you're running MongoDB locally, start the MongoDB service.
   ```bash
   mongod
   ```

5. **Run the application**:
    ```bash
    npm run start
    ```

    The server will run on `http://localhost:5000`.

6. **Start the cron job** (optional):
   The project uses `node-cron` to schedule email alerts. This is already part of the server code. When the server is running, the cron job will check the lead count daily at midnight and send alerts if needed.

### Development

For development purposes, use the following command to start the server with hot-reloading:
```bash
npm run dev
```

## Environment Variables

Make sure to add the following environment variables in your `.env` file:

- `MONGO_URI`: The connection URI for MongoDB.
- `EMAIL`: The email address used for sending alerts.
- `PASSWORD`: The password for the email account used for sending alerts.
- `PORT`: The port where the server will run (default: 5000).

## API Endpoints

The following API endpoints are available:

### **Fetch Leads**

- **URL:** `/api/crm/leads`
- **Method:** `GET`
- **Description:** Fetches dummy leads from the CRM service and saves them in MongoDB.
- **Example Response:**
    ```json
    {
      "message": "Leads fetched and saved",
      "leads": [
        { "name": "John Doe", "email": "john@example.com", "source": "Facebook" },
        { "name": "Jane Smith", "email": "jane@example.com", "source": "Google" }
      ]
    }
    ```

### **Fetch Campaigns**

- **URL:** `/api/marketing/campaigns`
- **Method:** `GET`
- **Description:** Fetches dummy campaigns from the marketing service and saves them in MongoDB.
- **Example Response:**
    ```json
    {
      "message": "Campaigns fetched and saved",
      "campaigns": [
        { "name": "Winter Sale", "budget": 5000, "leads_generated": 50 },
        { "name": "Spring Campaign", "budget": 8000, "leads_generated": 100 }
      ]
    }
    ```

### **Generate PDF Report**

- **URL:** `/api/reports/pdf`
- **Method:** `GET`
- **Description:** Generates a PDF report of leads and campaigns.
- **Response:** PDF file.

### **Generate CSV Report**

- **URL:** `/api/reports/csv`
- **Method:** `GET`
- **Description:** Generates a CSV report of leads.
- **Response:** CSV file.

## Postman Collection

You can test the API using the [Postman collection](https://www.getpostman.com/collections/your-postman-collection-url).

To import the collection:
1. Open Postman and click **Import**.
2. Select **Raw Text** and paste the JSON provided [here](#).
3. Click **Continue** and **Import**.

This will load the pre-configured requests into Postman.

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the project.
2. Create a new feature branch: `git checkout -b my-feature`.
3. Commit your changes: `git commit -m "Added some feature"`.
4. Push the changes to your fork: `git push origin my-feature`.
5. Create a Pull Request.

Make sure your code passes all linting and tests before submitting.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
