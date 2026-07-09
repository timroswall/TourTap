import adminRouter from "./admin";
import bookingRouter from "./booking";

const bookingHosts = [
  "booking.tourtap.dev",
  "booking.localhost",
];

export default bookingHosts.includes(window.location.hostname)
  ? bookingRouter
  : adminRouter;
