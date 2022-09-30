import React from 'react';
import RichTextEditor from './Richtext';

const TextEdit = (props: any) => {
  return (
    <div>
      <RichTextEditor {...props} />
    </div>
  );
};

export default TextEdit;
