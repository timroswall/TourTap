import adminRouter from "./admin";
import bookingRouter from "./booking";

const hostname = window.location.hostname

const router =
  hostname === "booking.tourtap.dev" ||
    hostname === "booking.localhost"
    ? bookingRouter
    : adminRouter

export default router
