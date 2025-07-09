"use client";
import Image from "next/image";
import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const MainPage = () => {
  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const studentDetails = studentsData.find((s) => s._id === data.studentId);
    if (!studentDetails) {
      toast.error("Invalid student selection");
      return;
    }

    startTransition(async () => {
      const result = await createAuthLink({ ...data, studentDetails });

      if (result?.success) {
        toast.success("Authorization Link Created");

        fetchAuthLinks(); // Refresh the table data
        reset();
        setValue("amount", 1);
        setValue("auto_debit_type", "upi");
        setOpenModal(false); // !!!!!PLEASE CHECK  THE ROWS ARE NOT UPDATING ON THE TABLE after creating auth-link!!!!!
      } else {
        toast.error(result?.message || "Error creating link");
        console.log(result);
      }
    });
  };

  const onSubmit = (data) => {
    toast.success("Submitted Successfully!");
    reset();
  };
  return (
    <section
      id="contact"
      className="lg:py-20 lg:flex-row flex-col mx-auto font-sans md:py-20 py-10  bg-neutral-50 flex lg:px-20 md:px-10 px-10 gap-10 justify-center items-center"
    >
      <div
        className="flex flex-col gap-8 lg:items-start items-center"
        data-aos="fade-up"
      >
        <Image src={"/lets.svg"} alt="Lets Talk" width={200} height={200} />
        <h2 className="xl:text-6xl lg:text-5xl md:text-5xl text-3xl font-bold mb-10 max-w-xl w-full md:leading-20 leading-12 text-center lg:text-start text-gray-900 font-playfair">
          Let's Talk on something{" "}
          <span className="text-lime-600">Great Together</span>
        </h2>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col bg-white shadow-md gap-4 md:p-8 py-8 px-5 rounded-xl border border-gray-100 max-w-lg w-full"
        data-aos="fade-up"
      >
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold text-center text-black">
            Get In Touch
          </h2>
          <p className="text-sm text-center text-lime-600">
            Please fill the details carefully!
          </p>
        </div>
        <div className="form-control flex flex-col gap-1">
          <label className=" text-gray-800">
            Name <sup>*</sup>
          </label>
          <input
            type="text"
            name="name"
            {...register("name", {
              required: "Name is required.",
            })}
            className="px-6 py-2 rounded-md border-1 border-gray-300 focus:outline-lime-600 focus:outline-1"
          />
          {errors.name && (
            <p className="errorMsg text-sm text-red-500">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="form-control flex flex-col gap-1">
          <label className=" text-gray-800">
            Phone <sup>*</sup>
          </label>
          <input
            type="number"
            name="phone"
            {...register("phone", {
              required: "Phone is required.",
              pattern: {
                value: /^[0-9]+$/,
                message: "Only numbers are allowed",
              },
              minLength: {
                value: 10,
                message: "Phone number must be at least 10 digits",
              },
              maxLength: {
                value: 10,
                message: "Phone number cannot exceed 10 digits",
              },
            })}
            className="px-6 py-2 rounded-md border-1 border-gray-300 outline-none focus:outline-lime-600 focus:outline-1"
          />
          {errors.phone && (
            <p className="errorMsg text-sm text-red-500">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div className="form-control flex flex-col gap-1">
          <label className=" text-gray-800">Email</label>
          <input
            type="text"
            name="email"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid.",
              },
            })}
            className="px-6 py-2 rounded-md border-1 border-gray-300 focus:outline-lime-600 focus:outline-1"
          />
          {errors.email && (
            <p className="errorMsg text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="form-control flex flex-col gap-1">
          <label className=" text-gray-800">
            What brings you here? <sup>*</sup>
          </label>
          <textarea
            type="text"
            name="whatbringhere"
            {...register("whatbringhere", {
              required: "Textarea is required.",
            })}
            className="px-6 py-2 rounded-md border-1 border-gray-300 focus:outline-lime-600 focus:outline-1"
          />
          {errors.whatbringhere && (
            <p className="errorMsg text-sm text-red-500">
              {errors.whatbringhere.message}
            </p>
          )}
        </div>

        <div className="form-control flex flex-col gap-1">
          <label className=" text-gray-800">
            Preferred time to reach you <sup>*</sup>
          </label>
          <input
            type="text"
            name="preferredtime"
            {...register("preferredtime", {
              required: "Field is required.",
            })}
            className="px-6 py-2 rounded-md border-1 border-gray-300 focus:outline-lime-600 focus:outline-1"
          />
          {errors.preferredtime && (
            <p className="errorMsg text-sm text-red-500">
              {errors.preferredtime.message}
            </p>
          )}
        </div>

        <div className="form-control flex gap-2 ">
          <input
            type="checkbox"
            name="agree"
            {...register("agree", {
              required: "Required.",
            })}
          />
          <label className=" text-gray-800">
            I agree to be contacted<sup>*</sup>
          </label>
          {errors.agree && (
            <p className="errorMsg text-sm text-red-500">
              {errors.agree.message}
            </p>
          )}
        </div>
        <p className="text-xs text-lime-600">
          By clicking submit, I concent to receive texts and emails from Dr.
          Serena Blake
        </p>

        <div className="form-control">
          <button
            type="submit"
            className="px-4 py-2 bg-lime-500 text-white hover:bg-lime-600 font-semibold text-sm rounded-md cursor-pointer"
          >
            Login
          </button>
          <button
            type="submit"
            disabled={isPending}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl transition disabled:opacity-50"
          >
            {isPending ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default MainPage;
