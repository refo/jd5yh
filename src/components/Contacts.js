import React, { useState } from "react";
import ContactCard from "./ContactCard";
import { connect } from "react-redux";
import Box from "@material-ui/core/Box";
import posed from "react-pose";

function Contacts({ contacts = [] }) {
  return contacts.map(item => {
    const hasChildren = !!(item.childItems && item.childItems.length);
    item = { ...item, hasChildren };

    return hasChildren ? (
      <ParentContact key={item.ID} {...item} />
    ) : (
      <ChildContact key={item.ID} {...item} />
    );
  });
}

export default connect(
  ({ contacts }) => ({ contacts }),
  {}
)(Contacts);

function ChildContact(props) {
  return (
    <Box>
      <PosedChild>
        <ContactCard {...props} />
      </PosedChild>
    </Box>
  );
}

function ParentContact(props) {
  const [expanded, setExpanded] = useState(false);
  const pose = expanded ? "expanded" : "collapsed";

  function toggleExpanded() {
    setExpanded(!expanded);
  }
  return (
    <Box>
      <PosedChild>
        <ContactCard {...props} onExpand={toggleExpanded} />
      </PosedChild>
      <PosedContainer pose={pose} withParent={false}>
        <Box pl={3}>
          {/* recursion */}
          <Contacts contacts={props.childItems} />
        </Box>
      </PosedContainer>
    </Box>
  );
}

const PosedContainer = posed.div({
  expanded: {
    staggerChildren: 100,
    height: "auto",
    opacity: 1
  },
  collapsed: {
    height: 0,
    opacity: 0
  }
});

const PosedChild = posed.div({
  expanded: {
    scale: 1,
    opacity: 1
  },
  collapsed: {
    scale: 0,
    opacity: 0
  },
  exit: {
    scale: 0,
    opacity: 0
  }
});
