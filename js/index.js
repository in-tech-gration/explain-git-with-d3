// require(['explaingit'], function (explainGit) { /* MOVED OUTSIDE */});

const examples = {

    // BASIC COMMANDS:
    'commit': {
        name: 'Commit',
        height: 200,
        baseLine: 0.4,
        commitData: [
            { id: 'e137e9b', tags: ['master'] }
        ],
        initialMessage: 'Type git commit a few times.',
        content: `<p>
        We are going to skip instructing you on how to add your files for commit in this explanation. Let's assume you already know how to do that. If you don't, go read some other tutorials.
        </p>
        <p>
        Pretend that you already have your files staged for commit and enter git commit as many times as you like in the terminal box.</p>`
    },
    'branch': {
        name: 'Branch',
        baseLine: 0.6,
        commitData: [
            { id: 'e137e9b', tags: ['master'] }
        ],
        content: `<p>
          <span class="cmd">git branch name</span> will create a new branch named "name".
          Creating branches just creates a new tag pointing to the currently checked out commit.
        </p>
        <p>
          Branches can be deleted using the command <span class="cmd">git branch -d name</span>.
        </p>
        <p>
          Type <span class="cmd">git commit</span> and <span class="cmd">git branch</span> commands
          to your hearts desire until you understand this concept.
        </p>        
        `
    },
    'checkout': {
        name: 'Checkout',
        height: 500,
        commitData: [
            { id: 'e137e9b' },
            { id: 'bb92e0e', parent: 'e137e9b', tags: ['master'] },
            { id: 'e088135', parent: 'e137e9b', tags: ['dev'] }
        ],
        initialMessage:
            'Use git checkout, git branch, and git commit commands until you understand.',
        content: `<p>
          <span class="cmd">git checkout</span> has many uses,
          but the main one is to switch between branches.</br>
          For example, to switch from master branch to dev branch,
          I would type <span class="cmd">git checkout dev</span>.
          After that, if I do a git commit, notice where it goes. Try it.
        </p>
        <p>
          In addition to checking out branches, you can also checkout individual commits. Try it.</br>
          Make a new commit and then type <span class="cmd">git checkout bb92e0e</span>
          and see what happens.
        </p>
        <p>
          Type <span class="cmd">git commit</span>, <span class="cmd">git branch</span>,
          and <span class="cmd">git checkout</span> commands to your hearts desire
          until you understand this concept.
        </p>`
    },
    'checkout-b': {
        name: 'Checkout-b',
        height: 500,
        commitData: [
            { id: 'e137e9b' },
            { id: 'f5b32c8', parent: 'e137e9b' },
            { id: 'bb92e0e', parent: 'f5b32c8', tags: ['master'] },
            { id: 'e088135', parent: 'e137e9b', tags: ['dev'] }
        ],
        initialMessage:
            'Use git checkout -b and git commit commands until you understand.',
        content: `<p>
          You can combine <span class="cmd">git branch</span> and <span class="cmd">git checkout</span>
          into a single command by typing <span class="cmd">git checkout -b branchname</span>.
          This will create the branch if it does not already exist and immediately check it out.
        </p>`
    },

    // UNDO COMMANDS:
    'reset': {
        name: 'Reset',
        height: 200,
        baseLine: 0.5,
        commitData: [
            { id: 'e137e9b' },
            { id: '0e70093', parent: 'e137e9b' },
            { id: '3e33afd', parent: '0e70093', tags: ['master'] }
        ],
        initialMessage: 'Type "git reset HEAD^".',
        content: `<p>
          <span class="cmd">git reset</span> will move HEAD and the current branch back to wherever
          you specify, abandoning any commits that may be left behind. This is useful to undo a commit
          that you no longer need.
        </p>
        <p>
          This command is normally used with one of three flags: "--soft", "--mixed", and "--hard".
          The soft and mixed flags deal with what to do with the work that was inside the commit after
          you reset, and you can read about it <a
            href="https://git-scm.com/book/en/v2/Git-Tools-Reset-Demystified">here</a>.
          Since this visualization cannot graphically display that work, only the "--hard" flag will work
          on this site.
        </p>
        <p>
          The ref "HEAD^" is usually used together with this command. "HEAD^" means "the commit right
          before HEAD. "HEAD^^" means "two commits before HEAD", and so on.
        </p>
        <p>
          Note that you must <b>never</b> use <span class="cmd">git reset</span> to abandon commits
          that have already been pushed and merged into the origin. This can cause your local repository
          to become out of sync with the origin. Don't do it unless you really know what you're doing.
        </p>
`
    },
    'revert': {
        name: 'Revert',
        height: 200,
        baseLine: 0.5,
        commitData: [
            { id: 'e137e9b' },
            { id: '0e70093', parent: 'e137e9b' },
            { id: '3e33afd', parent: '0e70093', tags: ['master'] }
        ],
        initialMessage: 'Type "git revert 0e70093".',
        content: `<p>
          To undo commits that have already been pushed and shared with the team, we cannot use the
          <span class="cmd">git reset</span> command. Instead, we have to use <span class="cmd">git revert</span>.
        </p>
        <p>
          <span class="cmd">git revert</span> will create a new commit that will undo all of the work that
          was done in the commit you want to revert.
        </p>
`
    },

    // TODO: 
    // 'switch': {}
    // TODO:
    // 'reflog': {}
    'tag': {
        name: 'Tag',
        baseLine: 0.6,
        commitData: [
            { id: 'e137e9b', tags: ['master'] }
        ]
    },

    'merge': {
        name: 'Merge',
        height: 500,
        commitData: [
            { id: 'e137e9b' },
            { id: 'bb92e0e', parent: 'e137e9b', tags: ['master'] },
            { id: 'f5b32c8', parent: 'e137e9b', tags: ['ff'] },
            { id: 'e088135', parent: 'f5b32c8', tags: ['dev'] }
        ],
        initialMessage:
            'Type "git merge dev".'
    },
    'rebase': {
        name: 'Rebase',
        height: 500,
        commitData: [
            { id: 'e137e9b' },
            { id: 'bb92e0e', parent: 'e137e9b', tags: ['master'] },
            { id: 'f5b32c8', parent: 'e137e9b' },
            { id: 'e088135', parent: 'f5b32c8', tags: ['dev'] }
        ],
        currentBranch: 'dev',
        initialMessage:
            'Type "git rebase master".'
    },
    'fetch': {
        name: 'Fetch',
        height: 500,
        commitData: [
            { id: 'e137e9b', tags: ['origin/master'] },
            { id: '6ce726f', parent: 'e137e9b' },
            { id: 'bb92e0e', parent: '6ce726f', tags: ['master'] },
            { id: '0cff760', parent: 'e137e9b', tags: ['origin/dev'] },
            { id: '4ed301d', parent: '0cff760', tags: ['dev'] }
        ],
        originData: [
            { id: 'e137e9b' },
            { id: '7eb7654', parent: 'e137e9b' },
            { id: '090e2b8', parent: '7eb7654' },
            { id: 'ee5df4b', parent: '090e2b8', tags: ['master'] },
            { id: '0cff760', parent: 'e137e9b' },
            { id: '2f8d946', parent: '0cff760' },
            { id: '29235ca', parent: '2f8d946', tags: ['dev'] }
        ],
        initialMessage:
            'Carefully compare the commit IDs between the origin and the local repository. ' +
            'Then type "git fetch".'
    },
    'pull': {
        name: 'Pull',
        height: 500,
        commitData: [
            { id: 'e137e9b', tags: ['origin/master'] },
            { id: '46d095b', parent: 'e137e9b', tags: ['master'] }
        ],
        originData: [
            { id: 'e137e9b' },
            { id: '7eb7654', parent: 'e137e9b' },
            { id: '090e2b8', parent: '7eb7654' },
            { id: 'ee5df4b', parent: '090e2b8', tags: ['master'] }
        ],
        initialMessage:
            'Carefully compare the commit IDs between the origin and the local repository. ' +
            'Then type "git pull".'
    },
    'push': {
        name: 'Push',
        height: 500,
        commitData: [
            { id: 'e137e9b', tags: ['origin/master'] },
            { id: '46d095b', parent: 'e137e9b', tags: ['master'] }
        ],
        originData: [
            { id: 'e137e9b' },
            { id: '7eb7654', parent: 'e137e9b', tags: ['master'] }
        ],
        initialMessage:
            'Carefully compare the commit IDs between the origin and the local repository. ' +
            'Then type "git push".'
    },
    'clean': {
        name: 'Clean',
        height: 200,
        baseLine: 0.4,
        commitData: [
            { id: 'e137e9b', tags: ['origin/master'] },
            { id: '0e70093', parent: 'e137e9b' },
            { id: '3e33afd', parent: '0e70093', tags: ['master'] }
        ],
        initialMessage: 'Type "git reset origin/master".'
    },
    'fetchrebase': {
        name: 'FetchRebase',
        height: 500,
        commitData: [
            { id: 'e137e9b', tags: ['origin/master', 'master'] },
            { id: '46d095b', parent: 'e137e9b' },
            { id: 'dccdc4d', parent: '46d095b', tags: ['my-branch'] }
        ],
        currentBranch: 'my-branch',
        originData: [
            { id: 'e137e9b' },
            { id: '7eb7654', parent: 'e137e9b' },
            { id: '090e2b8', parent: '7eb7654' },
            { id: 'ee5df4b', parent: '090e2b8', tags: ['master'] }
        ],
        initialMessage:
            'First type "git fetch". Then type "git rebase origin/master".'
    },
    'deletebranches': {
        name: 'DeleteBranches',
        height: 500,
        baseLine: 0.6,
        commitData: [
            { id: 'e137e9b' },
            { id: 'bb92e0e', parent: 'e137e9b' },
            { id: 'd25ee9b', parent: 'bb92e0e', tags: ['master'] },
            { id: '071ff28', parent: 'e137e9b', tags: ['protoss'] },
            { id: 'f5b32c8', parent: 'bb92e0e' },
            { id: 'e088135', parent: 'f5b32c8', tags: ['zerg'] },
            { id: '9e6c322', parent: 'bb92e0e' },
            { id: '593ae02', parent: '9e6c322', tags: ['terran'] }
        ],
        currentBranch: 'terran',
        initialMessage:
            'Delete some branches.'
    },
    'freeplay': {
        name: 'Free',
        height: 500,
        commitData: [
            { id: 'e137e9b', tags: ['origin/master', 'master'] }
        ],
        originData: [
            { id: 'e137e9b' },
            { id: '7eb7654', parent: 'e137e9b' },
            { id: '090e2b8', parent: '7eb7654' },
            { id: 'ee5df4b', parent: '090e2b8', tags: ['master'] }
        ],
        initialMessage:
            'Have fun.'
    }
};

window.addEventListener('hashchange', open, false);
window.addEventListener('load', open, false);

function open() {

    let hash = window.location.hash.substr(1),
        linkId = 'open-' + hash,
        example = examples[hash];

    if (example) {

        console.log({ example, hash, linkId });

        explainGit.reset();
        document.getElementById(linkId).classList.add('selected');
        explainGit.open(example);
        return;
    }

    if (hash === 'zen') {
        const elements = document.getElementsByClassName('row');
        for (var i = 0; i != elements.length; ++i) {
            elements[i].style.display = 'none';
        }

        explainGit.reset();

        explainGit.open({
            name: 'Zen',
            height: '100%',
            commitData: [
                { id: 'e137e9b', tags: ['master'], message: 'first commit' }
            ],
            initialMessage:
                'Have fun.'
        });
    }
}
