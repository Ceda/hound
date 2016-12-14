import classNames from 'classnames';

import RepoActivationButton from './repo_activation_button.js';

class Repo extends React.Component {
  render() {
    const {
      isProcessingId,
      repo,
      onRepoClicked,
    } = this.props;

    const showPrivate = !repo.active && repo.price_in_cents > 0;

    return (
      <li className={classNames(
          "repo",
          {"repo--active": repo.active},
          {"repo--processing": isProcessingId === repo.id}
        )}
      >
        <div className="repo-name">
          {repo.name}
        </div>
        <div className={classNames(
          "repo-activation-toggle",
          {"repo-activation-toggle--private": showPrivate}
        )}>
          <RepoActivationButton
            repo={repo}
            onRepoClicked={onRepoClicked}
            isProcessingId={isProcessingId}
          />
        </div>
      </li>
    );
  }
}

module.exports = Repo;
