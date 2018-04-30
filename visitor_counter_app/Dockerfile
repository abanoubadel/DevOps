FROM "node:boron"
WORKDIR /root
RUN git clone https://github.com/abanoubadel/DevOps.git
WORKDIR /root/DevOps/visitor_counter_app
RUN npm install
CMD ["node", "app.js"]