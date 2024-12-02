import { Container } from "@/components/Container";
import { Star } from "lucide-react";

export default function Review() {
  return (
    <Container>
      <div className="text-center my-12">
        <h1 className="text-5xl font-bold text-gray-800 dark:text-white">
          Add Review
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 mt-2">
          Share your experience with our recipes and help others discover great food!
        </p>
      </div>

      {/* Form Review */}
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Enter your name"
            />
          </div>
          
          <div>
            <label
              htmlFor="review"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Review
            </label>
            <textarea
              id="review"
              name="review"
              rows={4}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white resize-none"
              placeholder="Write your review here..."
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition font-medium"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
}