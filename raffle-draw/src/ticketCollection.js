const Ticket = require("./Ticket");

const tickets = Symbol("tickets");

class TicketCollection {
  constructor() {
    this[tickets] = [];
  }

  find() {
    return this[tickets];
  }

  create(username, price) {
    const ticket = new Ticket(username, price);
    this[tickets].push(ticket);
    return tickets;
  }

  findById(id) {
    return this[tickets].find((ticket) => ticket.id === id);
  }

  findByUsername(username) {
    return this[tickets].filter((ticket) => ticket.username === username);
  }

  updateById(id, ticketBody) {
    const ticket = this.findById(id);
    if (!ticket) return false;
    ticket.username = ticketBody.username ?? ticket.username;
    ticket.price = ticketBody.price ?? ticket.price;
    return ticket;
  }

  deleteById(id) {
    const index = this[tickets].findIndex((ticket) => ticket.id === id);
    if (index === -1) return false;
    this[tickets].splice(index, 1);
    return true;
  }

  createBulk(username, price, quantity) {
    const tickets = [];
    for (let i = 0; i < quantity; i++) {
      tickets.push(this.create(username, price));
    }
    return tickets;
  }

  updateBulk(username, ticketBody) {
    let userTickets = this.findByUsername(username);
    userTickets = userTickets?.map((ticket) =>
      this.updateById(ticket.id, ticketBody)
    );
    return userTickets;
  }

  deleteBulk(username) {
    let userTickets = this.findByUsername(username);
    userTickets = userTickets.map((ticket) =>
      this.deleteById(ticket.id, ticketBody)
    );
    return userTickets;
  }

  draw(winnerCount) {
    const winnersArray = new Array(winnerCount);
    let winnerIndex = 0;
    while (winnerIndex < winnerCount) {
      const ticketIndex = Math.floor(Math.random() * this[tickets].length);
      if (!winnersArray.includes(ticketIndex)) {
        winnersArray[winnerIndex++] = ticketIndex;
      }
    }
    return winnerIndex.map((ticketIndex) => this[tickets][ticketIndex]);
  }
}

const ticketCollection = new TicketCollection();
module.exports = ticketCollection;
