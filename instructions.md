copy id-app
mkdir docs
update angular.json  "outputPath": "../dist/",
# package.json update app name to two letter - app [ td-app ]

# Run below command
npm install
ng update
npm update

# ng serve --open should run the new website without any error

# Remove code-mirror components and dependencies from package.json
    Remove from styles.css
        @import 'codemirror/lib/codemirror' from styles.css
    Remove from main.ts
    /* code mirror */
    import 'codemirror/mode/javascript/javascript';
    import 'codemirror/mode/markdown/markdown';
    import 'codemirror/mode/clike/clike';
    import 'codemirror/mode/javascript/javascript';

# Update / Delete files/Folders

* Remove folders
    components/
        ia
        code-sandbox
        easy-editor
        roadmap

# Update app.module.ts
    Remove unwanted imports and components

# Update app-routing.module.ts
    Remove unwanted routing rules

* Update navbar.component.html
    Remove unwanted links

* Update app.component.ts
    Update app name

* Update app.component.ts
    Update app name

* Update environment files
    Update fields e.g clientSecret <GithubAuth>
    gh_default_user_repo : <username> / <orgname>,
    gh_dr_folder: <branchName/foldername>

* Github page settings
    ng build --configuration=production
    cd dist
    cp -r dist ..
    go to github.com
    Select the branch main and update folder (root) and save
