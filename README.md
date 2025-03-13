# Beyond Boundaries
The main website for Beyond Boundaries, a research group that aims to provide more awareness about HIV.

## Prerequisites
The following are the frameworks and tools that you must be familiar with to be able to contribute to this project:
1. [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) and [TypeScript](https://www.typescriptlang.org/docs/handbook/intro.html)
2. [Node.js](https://nodejs.org/en/download/) or [Bun](https://bun.sh/) (we personally prefer Bun)
3. [React](https://react.dev/learn)
4. [Next.js](https://nextjs.org/learn)
5. [Tailwind CSS](https://tailwindcss.com/docs)
6. [Vercel](https://vercel.com/docs)

## Running Locally
1. Run the following in your terminal starting with cloning the repository:
```bash
git clone https://github.com/louislemsic/beyond-boundaries.git
```
2. Install dependencies:
```bash
npm install    # or bun install
```
3. Create a `.env.local` file at the root of the project with the contents of `.env.template` and fill in the keys.

> [!IMPORTANT]
> The project will not run properly without the environment variables. Seek assistance from other developers in the team if you don't have the necessary values for the variables.

1. Run the development server:
```bash
npm run dev    # or bun dev
```

## Deployment
Once changes have been made, you can push commits to the `main` branch and Vercel will take care of the building and deployment. You can view the deployed progressive web application at [beyondboundaries.vercel.app](https://beyondboundaries.vercel.app).