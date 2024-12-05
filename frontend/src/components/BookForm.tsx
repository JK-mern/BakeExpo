import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import axios from "axios";
import { z } from "zod";

// Define Zod schema
const bookingSchema = z.object({
  FirstName: z.string().min(1, "First Name is required"),
  LastName: z.string().min(1, "Last Name is required"),
  CompanyName: z.string().min(1, "Company Name is required"),
  PhoneNumber: z
    .string()
    .regex(/^\d{10}$/, "Phone Number must be 10 digits"),
  Address: z.string().min(1, "Address is required"),
  Designation: z.string().min(1, "Designation is required"),
  WhastappNo: z
    .string()
    .regex(/^\d{10}$/, "WhatsApp Number must be 10 digits"),
  Email: z.string().email("Invalid email address"),
});

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingForm({ isOpen, onClose }: BookingFormProps) {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    CompanyName: "",
    PhoneNumber: "",
    Address: "",
    Designation: "",
    WhastappNo: "",
    Email: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form data
    const result = bookingSchema.safeParse(formData);
    if (!result.success) {
      // Map errors to display
      const errorMap = result.error.errors.reduce((acc, err) => {
        acc[err.path[0]] = err.message;
        return acc;
      }, {} as Record<string, string>);
      setErrors(errorMap);
      return;
    }

    // Clear errors
    setErrors({});

    try {
      const response = await axios.post("http://localhost:5000/register", formData);
      if (response.data.status) {
        onClose();
      }
      setFormData({
        FirstName: "",
        LastName: "",
        CompanyName: "",
        PhoneNumber: "",
        Address: "",
        Designation: "",
        WhastappNo: "",
        Email: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className=" rounded-xl shadow-xl max-w-md w-full p-6 relative bg-white"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Book Your Slot
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4 ">
              {["CompanyName", "FirstName", "LastName", "Designation", "WhastappNo", "PhoneNumber", "Address", "Email"].map((field) => (
                <div key={field}>
                  <label
                    htmlFor={field}
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {field.replace(/([A-Z])/g, " $1").trim()} *
                  </label>
                  {field === "Address" ? (
                    <textarea
                      id={field}
                      name={field}
                      required
                      value={(formData as any)[field]}
                      onChange={handleChange}
                      rows={3}
                      className={`w-full px-3 py-2 border ${
                        errors[field] ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500`}
                    />
                  ) : (
                    <input
                      type={field === "Email" ? "email" : "text"}
                      id={field}
                      name={field}
                      required
                      value={(formData as any)[field]}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border ${
                        errors[field] ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500`}
                    />
                  )}
                  {errors[field] && (
                    <p className="text-sm text-red-500 mt-1">{errors[field]}</p>
                  )}
                </div>
              ))}

              <button
                type="submit"
                className="w-full bg-violet-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
              >
                Submit Booking
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
