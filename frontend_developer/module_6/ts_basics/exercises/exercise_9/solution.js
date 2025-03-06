var ModalStatus;
(function (ModalStatus) {
    ModalStatus[ModalStatus["Opened"] = 0] = "Opened";
    ModalStatus[ModalStatus["Closed"] = 1] = "Closed";
})(ModalStatus || (ModalStatus = {}));
var buildModal = function (text, state) {
    return { text: text, state: state };
};
var modal = buildModal('hexlet forever', ModalStatus.Opened);
var modal2 = buildModal('hexlet forever', ModalStatus.Closed);
console.log(modal);
console.log(modal2);
