import Appointment from '../models/Appointments';

class AppointmentController {
  async store(req, res) {
    return res.json({ Appointment });
  }
}

export default new AppointmentController();

// Criar controller
