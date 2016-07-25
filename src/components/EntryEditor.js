import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ControlPane from './ControlPane';
import PreviewPane from './PreviewPane';
import { Icon, Card } from './UI';
import cssStyles from './EntryEditor.css';

export default function EntryEditor({ collection, entry, getMedia, onChange, onClose, onAddMedia, onRemoveMedia, onPersist }) {
  return <Card className={cssStyles.rootCard}>
    <h1>Entry in {collection.get('label')}</h1>
    <h2>{entry && entry.get('title')}</h2>
    <div className={`cms-container ${cssStyles.root}`} style={styles.container}>

      <div className="cms-control-pane" style={styles.paneLeft}>
        <ControlPane
            collection={collection}
            entry={entry}
            getMedia={getMedia}
            onChange={onChange}
            onAddMedia={onAddMedia}
            onRemoveMedia={onRemoveMedia}
        />
      </div>
      <div className="cms-preview-pane" style={styles.paneRight}>
        <div onClick={onClose} className={cssStyles.close}><Icon type="cancel" /></div>
        <PreviewPane collection={collection} entry={entry} getMedia={getMedia} />
      </div>
    </div>
    <button onClick={onPersist}>Save</button>
  </Card>;
}

const styles = {
  container: {
    display: 'flex'
  },
  paneLeft: {
    width: '50%',
    marginRight: 15
  },
  paneRight: {
    position:'relative',
    width: '50%'
  }
};

EntryEditor.propTypes = {
  collection: ImmutablePropTypes.map.isRequired,
  entry: ImmutablePropTypes.map.isRequired,
  getMedia: PropTypes.func.isRequired,
  onAddMedia: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onPersist: PropTypes.func.isRequired,
  onRemoveMedia: PropTypes.func.isRequired,
};
