//import React from "react";
import { Button, Label, TextInput, Select } from "flowbite-react";
import { Link } from "react-router-dom";

// eslint-disable-next-line no-unused-vars, react/prop-types
const SignUp = ({ setShowLoginForm }) => {
  /* const [formData, setFormData ] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone_number: '',
  }) */
  return (
    <div className="w-full max-w-md py-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Sign Up
      </h2>
      <form className="space-y-4">
        <div className="flex flex-row justify-between gap-2">
          {/* First Name */}
          <div className="">
            <Label htmlFor="firstName" value="First Name" />
            <TextInput
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Enter your first name"
              
              required
            />
          </div>
          {/* Last Name */}
          <div>
            <Label htmlFor="lastName" value="Last Name" />
            <TextInput
              id="lastName"
              type="text"
              placeholder="Enter your last name"
              required
            />
          </div>
        </div>

        <div className="flex flex-row justify-between gap-2">
            {/* Email */}
        <div>
          <Label htmlFor="email" value="Email" />
          <TextInput
            id="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Phone Number */}
        <div>
          <Label htmlFor="phoneNumber" value="Phone Number" />
          <TextInput
            id="phoneNumber"
            type="tel"
            placeholder="Enter your phone number"
            required
          />
        </div>
        </div>

        <div className="flex flex-row justify-between gap-2">
           {/* Age */}
        <div>
          <Label htmlFor="age" value="Age" />
          <TextInput
            id="age"
            type="number"
            placeholder="Enter your age"
            required
          />
        </div>

        {/* Gender */}
        <div>
          <Label htmlFor="gender" value="Gender" />
          <Select id="gender" required>
            <option value="">Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Select>
        </div> 
        </div>
        

        {/* Submit Button */}
        <div className="mt-6 py-4">
          <Button type="submit" color="blue" fullSized>
            Sign Up
          </Button>
        </div>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Already registered?{" "}
          <Link
            //to="/signup"
            className="text-blue-700 hover:underline dark:text-blue-500"
            onClick={() => setShowLoginForm(true)}
          >
            Sign in here
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
