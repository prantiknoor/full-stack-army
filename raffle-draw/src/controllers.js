const ticketCollection = require("./ticketCollection");

exports.sellSingleTicket = (req, res) => {
  const { username, price } = req.body;
  const ticket = ticketCollection.create(username, price);
  res.status(201).json({
    message: "Ticket created successfully",
    ticket,
  });
};

exports.sellBulkTicket = (req, res) => {
  const { username, price, quantity } = req.body;
  const tickets = ticketCollection.createBulk(username, price, quantity);
  res.status(201).json({
    message: "Tickets created successfully",
    tickets,
  });
};

exports.findAll = (req, res) => {
  const tickets = ticketCollection.findAll();
  res.status(200).json({ tickets, total: tickets.length });
};

exports.findById = (req, res) => {
    const ticketId = req.params.id;
    const ticket = ticketCollection.findById(ticketId);
    if(!ticket) {
        return res.status(404).json({ message: "404 ticket not found"});
    }
    res.status(200).json(ticket);
}

exports.findByUsername = (req, res) => {
	const username = req.params.username;
	const tickets = ticketCollection.findByUsername(username);
	if(!tickets) {
		return res.status(404).json({ message: "404 no tickets found" });
	}
	res.status(200).json({tickets, total: tickets.length });
}

exports.updateById = (req, res) => {
	const id = req.params.id;
	const ticketBody = req.body; 
	const ticket = ticketCollection.updateById(id, ticketBody);
	if(!ticket) return res.status(404).json({ message: "404 No ticket found" })
	res.status(200).json(ticket);
}

exports.updateByUsername = (req, res) => {
	const username = req.params.username;
	const ticketBody = req.body; 
	const tickets = ticketCollection.updateByUsername(username, ticketBody);
	if(!tickets) return res.status(404).json({ message: "404 No ticket found" });
	res.status(200).json({ tickets, total: tickets.length });
}
