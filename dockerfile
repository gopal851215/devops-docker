# 1️⃣ Use lightweight Node.js image
FROM node:20-alpine

# 2️⃣ Set working directory inside container
WORKDIR /app

# 3️⃣ Copy package files first (for caching)
COPY package*.json ./

# 4️⃣ Install dependencies
RUN npm install --production

# 5️⃣ Copy all project files
COPY . .

# 6️⃣ Expose app port
EXPOSE 3000

# 7️⃣ Start the server
CMD ["node", "server.js"]
