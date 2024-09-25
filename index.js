require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const compression = require("compression");
const rateLimit = require("express-rate-limit");
const cacheMiddleware = require("./src/middlewares/cacheMiddleware");

const buyerRoutes = require("./src/routes/buyerRoutes");
const companyProfileRoutes = require("./src/routes/companyProfileRoutes");
const locationRoutes = require("./src/routes/locationRoutes");
const purchaserRoutes = require("./src/routes/purchaserRoutes");
const commodityRoutes = require("./src/routes/commodityRoutes");
const rateRoutes = require("./src/routes/rateRoutes");
const groupOfCompanyRoutes = require("./src/routes/groupOfCompanyRoutes");
const calendarRoutes = require("./src/routes/calendarRoutes");

const app = express();

app.use(cors());
app.use(compression());
app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

connectDB();

app.use("/api/buyers", buyerRoutes);
app.use("/api/company-profile", companyProfileRoutes);
app.use("/api/locations", locationRoutes);
app.use("/api/purchasers", purchaserRoutes);
app.use("/api/commodities", commodityRoutes);
app.use("/api/rate-entry", rateRoutes);
app.use("/api/group-of-company", groupOfCompanyRoutes);

app.use(cacheMiddleware);

app.use("/api/calendar", calendarRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
