export default function Task(text, id) {
	this.id = id;
	this.isDone = false;
	this.isDeleted = false;
	this.text = text;
}
