import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ControlPane from './ControlPane';
import PreviewPane from './PreviewPane';
import { Icon, Card } from './UI';
import cssStyles from './EntryEditor.css';

export default function EntryEditor({ collection, entry, getMedia, onChange, onClose, onAddMedia, onRemoveMedia, onPersist }) {
  return <Card className={cssStyles.rootCard}>
    <div className={`cms-container ${cssStyles.root}`} style={styles.container}>

      <div className="cms-control-pane" style={styles.paneLeft}>
        <h1 className={cssStyles.title}>Edit</h1>
        <ControlPane
            collection={collection}
            entry={entry}
            getMedia={getMedia}
            onChange={onChange}
            onAddMedia={onAddMedia}
            onRemoveMedia={onRemoveMedia}
        />
      </div>
      <div className={cssStyles.previewPane} style={styles.paneRight}>
        <h1 className={cssStyles.title}>Preview</h1>
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
    marginLeft: 30,
    marginRight: 100
  },
  paneRight: {
    position:'relative',
    marginRight: 30,
    width: '50%',
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
