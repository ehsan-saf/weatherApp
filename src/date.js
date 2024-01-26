import moment from "moment";

export default function getDateInfo() {
  return moment().format("dddd h:mm a");
}
