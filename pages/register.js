import Link from 'next/link';

export default function Register() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Register</h1>
      <form>
        <div>
          <label htmlFor="username" className="block mb-2">Username:</label>
          <input type="text" id="username" name="username" required className="border rounded p-2 mb-4 w-full" />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2">Email:</label>
          <input type="email" id="email" name="email" required className="border rounded p-2 mb-4 w-full" />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2">Password:</label>
          <input type="password" id="password" name="password" required className="border rounded p-2 mb-4 w-full" />
        </div>
        <button type="submit" className="bg-blue-500 text-white rounded p-2">Register</button>
      </form>
      <p className="mt-4">Already have an account? <Link href="/login" className="text-blue-500">Login here</Link></p>
      <div className="mt-4 p-5 bg-gray-200">
        {/* Placeholder for logo */}
        Logo
      </div>
    </div>
  );
}
