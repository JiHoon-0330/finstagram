import "rc-tree/assets/index.css";
import "./contextmenu.scss";
import OKRSearchInput from "components/input/OKRSearchInput";
import SearchListItem from "components/item/SearchListItem";
import Profile from "components/Profile";
import { useSearchUser } from "hooks/useRedux";
import { useTeamOKR, useUserOKR } from "hooks/useOKRRedux";
import React, { createRef, useEffect, useState } from "react";
import Tree, { TreeNode } from "rc-tree";
import { Icon, InlineIcon } from "@iconify/react";
import plusBoxOutline from "@iconify-icons/mdi/plus-box-outline";
import minusBoxOutline from "@iconify-icons/mdi/minus-box-outline";
import { searchListUser } from "utils/searchUtil";
import useOutsideClick from "hooks/useOutsideClick";
import useWindowSize from "hooks/useWindowSize";

const STYLE = `
.rc-tree-child-tree {
  display: block;
}

.node-motion {
  transition: all .3s;
  overflow-y: hidden;
}
`;

export default function TeamList() {
  const [show, setShow] = useState(false);
  const [focus, setFocus] = useState(false);
  const [text, setText] = useState("");
  const [list, setList] = useState<SearchItemType[]>([]);
  const { width } = useWindowSize();
  const { data } = useSearchUser();
  const divRef = createRef<HTMLDivElement>();
  const {
    data: userOKRData,
    cancel,
    request: userOKRRequest,
    isFetching,
    error,
  } = useUserOKR();
  const { data: teamOKRData = {}, request: teamOKRRequest } = useTeamOKR();
  const { year, quarter } = teamOKRData;

  const switcherIcon = (obj: any) => {
    if (obj.isLeaf) return undefined;
    if (obj.expanded)
      return (
        <Icon
          style={{ backgroundColor: "#fff", top: "-3px", position: "relative" }}
          icon={minusBoxOutline}
        />
      );
    return (
      <Icon
        style={{ backgroundColor: "#fff", top: "-3px", position: "relative" }}
        icon={plusBoxOutline}
      />
    );
  };

  const organizationTree = (obj: any): React.ReactNode => {
    return (
      <TreeNode
        title={obj.name}
        key={obj.id}
        isLeaf={!obj?.children || obj?.children.length === 0}
      >
        {obj?.children &&
          obj.children.map((chlidObj: any) => organizationTree(chlidObj))}
      </TreeNode>
    );
  };

  const motion = {
    motionName: "node-motion",
    motionAppear: false,
    onAppearStart: () => ({ height: 0 }),
    onAppearActive: (node: any) => ({ height: node.scrollHeight }),
    onLeaveStart: (node: any) => ({ height: node.offsetHeight }),
    onLeaveActive: () => ({ height: 0 }),
  };

  useEffect(() => {
    if (text && text.trim().length > 1) {
      setFocus(true);
      setShow(true);
      const search = text.trim();
      if (!data) return;
      const searchData = searchListUser(data.user, search);
      setList(searchData);
    } else {
      setShow(false);
      cancel();
    }
  }, [text]);

  useEffect(() => {
    if (error && error.response?.data?.message) {
      alert(error.response.data.message);
    }
  }, [error]);

  useOutsideClick(divRef, () => {
    if (text.length === 0) setFocus(false);
  });

  return (
    <div className="section-1 col-auto h-md-100 w-250px d-flex flex-column border-right px-0">
      <div className="card card-custom card-stretch rounded-0 shadow-none">
        <OKRSearchInput
          onFocus={(e) => setFocus(e)}
          value={text}
          onChangeState={setText}
        />
        <div ref={divRef} className={`list-team-box card-body position-relative px-6 py-0 py-md-5 h-md-100 overflow-y-auto 
            ${
              focus ? (show ? "show" : "focus") : ""
            }`}>
          <div className="list-team">
            <style dangerouslySetInnerHTML={{ __html: STYLE }} />
            <Tree
              style={{ fontSize: "15px" }}
              defaultExpandAll
              showLine
              showIcon={false}
              switcherIcon={switcherIcon}
              // motion={motion}
              onSelect={(selectedKeys, { node }) => {
                if (selectedKeys[0])
                  teamOKRRequest(year, quarter, selectedKeys[0], node.title);
                else teamOKRRequest(year, quarter);
                if (width && width <= 991) {
                  setFocus(false);
                }
              }}
            >
              {data?.organization &&
                data?.organization.map((obj: any) => organizationTree(obj))}
            </Tree>
          </div>
          <div
            id="layer_okr_srchList"
            className={`layer fade position-absolute overflow-y-auto pt-3 pb-3 ${
              show ? "show" : ""
            }`}
          >
            {list.map((user) => (
              <SearchListItem
                key={user.id}
                user={user}
                onClick={() => {
                  if (width && width <= 991) {
                    setFocus(false);
                    setText("");
                  }
                  userOKRRequest(year, quarter, user.id);
                  teamOKRRequest(year, quarter);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
