// define(['historyview', 'controlbox', 'd3'], function (HistoryView, ControlBox, d3) { /* MOVED OUTSIDE */});

var prefix = 'ExplainGit';
var openSandBoxes = [];
var explainGit;

function renderContainer(mdContent, containerId) {
    const div = document.createElement('div');
    div.id = containerId;
    div.className = 'twelvecol concept-container';
    const contentHTML = marked.parse(mdContent)
    div.innerHTML = contentHTML;
    div.innerHTML += `<div class="playground-container"></div>`;
    const parent = document.querySelector('.concept-area');
    parent.appendChild(div);
}

var open = function (_args) {

    let args = Object.create(_args);
    let name = prefix + args.name;
    let containerId = name + '-Container';
    let content = _args.content || '';

    // Create Container Element:
    renderContainer(content, containerId);

    let container = d3.select('#' + containerId);
    let playground = container.select('.playground-container');
    // let playground = d3.select('#playground-container'),
    let historyView, originView = null;
    let controlBox;

    container.style('display', 'block');

    args.name = name;
    historyView = new HistoryView(args);

    if (args.originData) {
        originView = new HistoryView({
            name: name + '-Origin',
            width: 300,
            height: 225,
            commitRadius: 15,
            remoteName: 'origin',
            commitData: args.originData
        });

        originView.render(playground);
    }

    controlBox = new ControlBox({
        historyView: historyView,
        originView: originView,
        initialMessage: args.initialMessage
    });

    controlBox.render(playground);
    historyView.render(playground);

    openSandBoxes.push({
        hv: historyView,
        cb: controlBox,
        container: container
    });
};

var reset = function () {
    for (var i = 0; i < openSandBoxes.length; i++) {
        var osb = openSandBoxes[i];
        osb.hv.destroy();
        osb.cb.destroy();
        osb.container.style('display', 'none');
    }

    openSandBoxes.length = 0;
    d3.selectAll('a.openswitch').classed('selected', false);
};

window.explainGit = {
    HistoryView,
    ControlBox,
    generateId: HistoryView.generateId,
    open,
    reset,
};