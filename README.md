# weather-app

---

#### Installation Steps:

1. Make sure you have nodejs and npm installed
2. Clone the repo: `git clone https://abhishekxix/weather-app.git`
3. Run `cd weather-app`
4. Run `npm install`

---

#### Following are the API routes:

- `/api/v1/current`
- `/api/v1/forecast/`
- `/api/v1/forecast/minutely`
- `/api/v1/forecast/hourly`
- `/api/v1/forecast/daily`
- `/api/v1/pollution`
- `/api/v1/pollution/forecast`

---

#### Required query params:

- /api/v1/
  - /current
    - lat - lattitude
    - lon - longitude
    - units - metric/standard/imperial
  - /forecast | _including the minutely, hourly, and daily forecast routes_ |
    - lat - lattitude
    - lon - longitude
    - units - metric/standard/imperial
  - /pollution and pollution/forecast
    - lat - lattitude
    - lon - longitude

---
