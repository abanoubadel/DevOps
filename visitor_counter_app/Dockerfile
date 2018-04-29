FROM "node:boron"
RUN git clone https://github.com/abanoubadel/DevOps.git
WORKDIR /root/DevOps/visitor_counter_app
RUN npm install
CMD ["node", "app.js"]
EXPOSE 8000