import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Formik } from "formik";
import Booking from "../pages/Booking"; // Make sure the path to your component is correct
import userEvent from "@testing-library/user-event";

describe("Booking Component", () => {
  test("displays validation error if name is empty and form is submitted", async () => {
    render(<Booking />);

    // Find the name input field and submit button
    const nameInput = screen.getByPlaceholderText("Enter your name");
    const submitButton = screen.getByRole("button", { name: /submit/i });

    // Simulate form submission without entering a name
    userEvent.click(submitButton);

    // Wait for the error message to appear
    await waitFor(() => screen.getByText("Name is required"));

    // Check if the error message is shown
    expect(screen.getByText("Name is required")).toBeInTheDocument();
  });

  test("does not display validation error if name is entered", async () => {
    render(<Booking />);

    const nameInput = screen.getByPlaceholderText("Enter your name");
    const submitButton = screen.getByRole("button", { name: /submit/i });

    // Simulate entering a valid name
    userEvent.type(nameInput, "John");

    // Submit the form
    userEvent.click(submitButton);

    // Wait for the form submission to complete
    await waitFor(() => expect(screen.queryByText("Name is required")).not.toBeInTheDocument());
  });

  test("displays validation error if name is too short", async () => {
    render(<Booking />);

    const nameInput = screen.getByPlaceholderText("Enter your name");
    const submitButton = screen.getByRole("button", { name: /submit/i });

    // Simulate entering a short name
    userEvent.type(nameInput, "J");

    // Submit the form
    userEvent.click(submitButton);

    // Wait for the error message to appear
    await waitFor(() => screen.getByText("Name must be at least 2 characters"));

    // Check if the error message is shown
    expect(screen.getByText("Name must be at least 2 characters")).toBeInTheDocument();
  });
});
