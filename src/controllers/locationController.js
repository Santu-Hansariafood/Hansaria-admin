const locationService = require("../services/locationService");

exports.addLocation = async (req, res) => {
  try {
    const { location, address, state, district, pin } = req.body;

    if (!location || !address || !state || !district || !pin) {
      return res.status(400).json({ msg: "Please enter all fields" });
    }

    const newLocation = await locationService.createLocation({
      location,
      address,
      state,
      district,
      pin,
    });

    res.status(201).json(newLocation);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server error" });
  }
};

exports.getAllLocations = async (req, res) => {
  try {
    const locations = await locationService.getAllLocations();
    res.status(200).json(locations);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server error" });
  }
};

exports.getLocationById = async (req, res) => {
  try {
    const location = await locationService.getLocationById(req.params.id);

    if (!location) {
      return res.status(404).json({ msg: "Location not found" });
    }
    res.status(200).json(location);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server error" });
  }
};

exports.updateLocation = async (req, res) => {
  try {
    const { location, address, state, district, pin } = req.body;

    const updatedLocation = await locationService.updateLocation(
      req.params.id,
      { location, address, state, district, pin }
    );

    if (!updatedLocation) {
      return res.status(404).json({ msg: "Location not found" });
    }

    res.status(200).json(updatedLocation);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server error" });
  }
};

exports.deleteLocation = async (req, res) => {
  try {
    const location = await locationService.deleteLocation(req.params.id);

    if (!location) {
      return res.status(404).json({ msg: "Location not found" });
    }

    res.status(200).json({ msg: "Location deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server error" });
  }
};
