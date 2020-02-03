import styled from '@emotion/styled';
import { injectGlobal } from 'emotion';
import getTheme from '@lskjs/theme/getTheme';
import highResPng from './high-res.png';

export const Container = styled.div`
  /* .react-tel-input {
    font-family: ${props => props.theme.fontFamily};
  }
  .react-tel-input .flag-dropdown:hover .selected-flag{
    background: none;
  }
  .react-tel-input .flag-dropdown:hover .selected-flag{
    background: none;
  }
  .react-tel-input .flag-dropdown.open-dropdown .selected-flag{
    background: none;
  }
  .react-tel-input .country-list .country {
    padding: 0px 10px;
    font-weight: normal;
  }
  .country-name {
    font-weight: normal;
  }
  .react-tel-input .country-list {
    margin: 0px;
  } */

  .react-tel-input .selected-flag .arrow {
    border-top: 4px solid ${p => getTheme(p.theme, 'colors.primary')};
    &.up {
      border-top: none;
      border-bottom: 4px solid ${p => getTheme(p.theme, 'colors.primary')};
    }
  }
`;

export const injectStyles = () => injectGlobal`
  .ant-form-item-children > div > div > input {
    margin: 0px;

  }
  .react-tel-input {
    .form-control {
      font-size: 16px;
      background: #FFFFFF;
      border: 1px solid #CACACA;
      border-radius: 5px;
      width: 300px;
      outline: none;
      padding: 18.5px 14px 18.5px 58px;
      transition: box-shadow ease .25s, border-color ease .25s;
      color: #495057;

      &:focus, &.open {
        background-color: #fff;
        border-color: #80bdff;
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
      }
      &.invalid-number {
        border: 1px solid #f44336;
        border-left-color: #cacaca;
        &:focus {
          box-shadow: 0 0 0 1px #f44336;
        }
      }
      &.open {
        z-index: 2;
      }
    }
    .flag-dropdown {
      outline: none;
      position: absolute;
      top: 0;
      bottom: 0;
      padding: 0;
      border-radius: 3px 0 0 3px;
      &.open {
        z-index: 2;
        width: 100%;
      }
      &:hover, &:focus {
        cursor: pointer;
      }
    }
    input[disabled] {
      &+.flag-dropdown {
        &:hover {
          cursor: default;
          .selected-flag {
            background-color: transparent;
          }
        }
      }
    }
    .selected-flag {
      position: relative;
      width: 52px;
      height: 100%;
      padding: 0 0 0 11px;
      border-radius: 3px 0 0 3px;
      .flag {
        position: absolute;
        top: 50%;
        margin-top: -12px;
      }
      .arrow {
        position: relative;
        top: 50%;
        margin-top: -1px;
        left: 29px;
        width: 0;
        height: 0;
        border-left: 3px solid transparent;
        border-right: 3px solid transparent;
        &.up {
          border-top: none;
        }
      }
    }
    .country-list {
      z-index: 1;
      list-style: none;
      position: absolute;
      width: 100%;
      padding: 0;
      margin: 10px 0 10px -1px;
      box-shadow: 1px 2px 18px rgba(0, 0, 0, 0.25);
      background-color: white;
      max-height: 220px;
      overflow-y: scroll;
      border-radius: 7px;
      .flag {
        display: inline-block;
        position: absolute;
        left: 13px;
        /* top: 8px; */
      }
      .divider {
        padding-bottom: 5px;
        margin-bottom: 5px;
        border-bottom: 1px solid #ccc;
      }
      .country {
        display: flex;
        align-items: center;
        position: relative;
        padding: 12px 9px 13px 46px;
        .dial-code {
          color: #6b6b6b;
          line-height: 1.57;
        }
        &:hover {
          background-color: #f1f1f1;
        }
        &.highlight {
          background-color: #f1f1f1;
        }
      }
      .flag {
        margin-right: 7px;
        margin-top: -2px;
        /* margin-top: 2px; */
      }
      .country-name {
        margin-right: 6px;
        line-height: 1.57;
      }
      .search {
        z-index: 2;
        position: sticky;
        top: 0;
        background-color: #fff;
        padding: 10px 0 6px 10px;
      }
      .search-emoji {
        display: none;
        font-size: 15px;
      }
      .search-box {
        border: 1px solid #cacaca;
        border-radius: 3px;
        font-size: 15px;
        line-height: 15px;
        margin-left: 6px;
        padding: 3px 8px 5px;
        outline: none;
      }
      .no-entries-message {
        padding: 7px 10px 11px;
        opacity: .7;
      }
    }
  }
  .react-tel-input {
  font-size: 15px;
  position: relative;
  width: 100%;
  :disabled {
    cursor: not-allowed;
  }
  .flag {
    width: 25px;
    height: 20px;
    background: url(${highResPng});
    background-repeat: no-repeat;
  }
  .ad { background-position: -48px -24px; }
  .ae { background-position: -72px -24px; }
  .af { background-position: -96px -24px; }
  .ag { background-position: -120px -24px; }
  .ai { background-position: -144px -24px; }
  .al { background-position: -168px -24px; }
  .am { background-position: -192px -24px; }
  .an { background-position: -216px -24px; }
  .ao { background-position: -240px -24px; }
  .aq { background-position: -264px -24px; }
  .ar { background-position: -288px -24px; }
  .as { background-position: -312px -24px; }
  .at { background-position: -336px -24px; }
  .au { background-position: -360px -24px; }
  .aw { background-position: -384px -24px; }
  .ax { background-position: -0px -48px; }
  .az { background-position: -24px -48px; }
  .ba { background-position: -48px -48px; }
  .bb { background-position: -72px -48px; }
  .bd { background-position: -96px -48px; }
  .be { background-position: -120px -48px; }
  .bf { background-position: -144px -48px; }
  .bg { background-position: -168px -48px; }
  .bh { background-position: -192px -48px; }
  .bi { background-position: -216px -48px; }
  .bj { background-position: -240px -48px; }
  .bl { background-position: -264px -48px; }
  .bm { background-position: -288px -48px; }
  .bn { background-position: -312px -48px; }
  .bo { background-position: -336px -48px; }
  .br { background-position: -360px -48px; }
  .bs { background-position: -384px -48px; }
  .bt { background-position: -0px -72px; }
  .bw { background-position: -24px -72px; }
  .by { background-position: -48px -72px; }
  .bz { background-position: -72px -72px; }
  .ca { background-position: -96px -72px; }
  .cc { background-position: -120px -72px; }
  .cd { background-position: -144px -72px; }
  .cf { background-position: -168px -72px; }
  .cg { background-position: -192px -72px; }
  .ch { background-position: -216px -72px; }
  .ci { background-position: -240px -72px; }
  .ck { background-position: -264px -72px; }
  .cl { background-position: -288px -72px; }
  .cm { background-position: -312px -72px; }
  .cn { background-position: -336px -72px; }
  .co { background-position: -360px -72px; }
  .cr { background-position: -384px -72px; }
  .cu { background-position: -0px -96px; }
  .cv { background-position: -24px -96px; }
  .cw { background-position: -48px -96px; }
  .cx { background-position: -72px -96px; }
  .cy { background-position: -96px -96px; }
  .cz { background-position: -120px -96px; }
  .de { background-position: -144px -96px; }
  .dj { background-position: -168px -96px; }
  .dk { background-position: -192px -96px; }
  .dm { background-position: -216px -96px; }
  .do { background-position: -240px -96px; }
  .dz { background-position: -264px -96px; }
  .ec { background-position: -288px -96px; }
  .ee { background-position: -312px -96px; }
  .eg { background-position: -336px -96px; }
  .eh { background-position: -360px -96px; }
  .er { background-position: -384px -96px; }
  .es { background-position: -0px -120px; }
  .et { background-position: -24px -120px; }
  .eu { background-position: -48px -120px; }
  .fi { background-position: -72px -120px; }
  .fj { background-position: -96px -120px; }
  .fk { background-position: -120px -120px; }
  .fm { background-position: -144px -120px; }
  .fo { background-position: -168px -120px; }
  .fr { background-position: -192px -120px; }
  .ga { background-position: -216px -120px; }
  .gb { background-position: -240px -120px; }
  .gd { background-position: -264px -120px; }
  .ge { background-position: -288px -120px; }
  .gg { background-position: -312px -120px; }
  .gh { background-position: -336px -120px; }
  .gi { background-position: -360px -120px; }
  .gl { background-position: -384px -120px; }
  .gm { background-position: -0px -144px; }
  .gn { background-position: -24px -144px; }
  .gq { background-position: -48px -144px; }
  .gr { background-position: -72px -144px; }
  .gs { background-position: -96px -144px; }
  .gt { background-position: -120px -144px; }
  .gu { background-position: -144px -144px; }
  .gw { background-position: -168px -144px; }
  .gy { background-position: -192px -144px; }
  .hk { background-position: -216px -144px; }
  .hn { background-position: -240px -144px; }
  .hr { background-position: -264px -144px; }
  .ht { background-position: -288px -144px; }
  .hu { background-position: -312px -144px; }
  .ic { background-position: -336px -144px; }
  .id { background-position: -360px -144px; }
  .ie { background-position: -384px -144px; }
  .il { background-position: -0px -168px; }
  .im { background-position: -24px -168px; }
  .in { background-position: -48px -168px; }
  .iq { background-position: -72px -168px; }
  .ir { background-position: -96px -168px; }
  .is { background-position: -120px -168px; }
  .it { background-position: -144px -168px; }
  .je { background-position: -168px -168px; }
  .jm { background-position: -192px -168px; }
  .jo { background-position: -216px -168px; }
  .jp { background-position: -240px -168px; }
  .ke { background-position: -264px -168px; }
  .kg { background-position: -288px -168px; }
  .kh { background-position: -312px -168px; }
  .ki { background-position: -336px -168px; }
  .km { background-position: -360px -168px; }
  .kn { background-position: -384px -168px; }
  .kp { background-position: -0px -192px; }
  .kr { background-position: -24px -192px; }
  .kw { background-position: -48px -192px; }
  .ky { background-position: -72px -192px; }
  .kz { background-position: -96px -192px; }
  .la { background-position: -120px -192px; }
  .lb { background-position: -144px -192px; }
  .lc { background-position: -168px -192px; }
  .li { background-position: -192px -192px; }
  .lk { background-position: -216px -192px; }
  .lr { background-position: -240px -192px; }
  .ls { background-position: -264px -192px; }
  .lt { background-position: -288px -192px; }
  .lu { background-position: -312px -192px; }
  .lv { background-position: -336px -192px; }
  .ly { background-position: -360px -192px; }
  .ma { background-position: -384px -192px; }
  .mc { background-position: -0px -216px; }
  .md { background-position: -24px -216px; }
  .me { background-position: -48px -216px; }
  .mf { background-position: -72px -216px; }
  .mg { background-position: -96px -216px; }
  .mh { background-position: -120px -216px; }
  .mk { background-position: -144px -216px; }
  .ml { background-position: -168px -216px; }
  .mm { background-position: -192px -216px; }
  .mn { background-position: -216px -216px; }
  .mo { background-position: -240px -216px; }
  .mp { background-position: -264px -216px; }
  .mq { background-position: -288px -216px; }
  .mr { background-position: -312px -216px; }
  .ms { background-position: -336px -216px; }
  .mt { background-position: -360px -216px; }
  .mu { background-position: -384px -216px; }
  .mv { background-position: -0px -240px; }
  .mw { background-position: -24px -240px; }
  .mx { background-position: -48px -240px; }
  .my { background-position: -72px -240px; }
  .mz { background-position: -96px -240px; }
  .na { background-position: -120px -240px; }
  .nc { background-position: -144px -240px; }
  .ne { background-position: -168px -240px; }
  .nf { background-position: -192px -240px; }
  .ng { background-position: -216px -240px; }
  .ni { background-position: -240px -240px; }
  .nl { background-position: -264px -240px; }
  .no { background-position: -288px -240px; }
  .np { background-position: -312px -240px; }
  .nr { background-position: -336px -240px; }
  .nu { background-position: -360px -240px; }
  .nz { background-position: -384px -240px; }
  .om { background-position: -0px -264px; }
  .pa { background-position: -24px -264px; }
  .pe { background-position: -48px -264px; }
  .pf { background-position: -72px -264px; }
  .pg { background-position: -96px -264px; }
  .ph { background-position: -120px -264px; }
  .pk { background-position: -192px -264px; }
  .pl { background-position: -216px -264px; }
  .pn { background-position: -240px -264px; }
  .pr { background-position: -264px -264px; }
  .ps { background-position: -288px -264px; }
  .pt { background-position: -312px -264px; }
  .pw { background-position: -336px -264px; }
  .py { background-position: -360px -264px; }
  .qa { background-position: -384px -264px; }
  .ro { background-position: -0px -288px; }
  .rs { background-position: -24px -288px; }
  .ru { background-position: -48px -288px; }
  .rw { background-position: -72px -288px; }
  .sa { background-position: -96px -288px; }
  .sb { background-position: -120px -288px; }
  .sc { background-position: -144px -288px; }
  .sd { background-position: -168px -288px; }
  .se { background-position: -192px -288px; }
  .sg { background-position: -216px -288px; }
  .sh { background-position: -240px -288px; }
  .si { background-position: -264px -288px; }
  .sk { background-position: -288px -288px; }
  .sl { background-position: -312px -288px; }
  .sm { background-position: -336px -288px; }
  .sn { background-position: -360px -288px; }
  .so { background-position: -384px -288px; }
  .sr { background-position: -0px -312px; }
  .ss { background-position: -24px -312px; }
  .st { background-position: -48px -312px; }
  .sv { background-position: -72px -312px; }
  .sy { background-position: -96px -312px; }
  .sz { background-position: -120px -312px; }
  .tc { background-position: -144px -312px; }
  .td { background-position: -168px -312px; }
  .tf { background-position: -192px -312px; }
  .tg { background-position: -216px -312px; }
  .th { background-position: -240px -312px; }
  .tj { background-position: -264px -312px; }
  .tk { background-position: -288px -312px; }
  .tl { background-position: -312px -312px; }
  .tm { background-position: -336px -312px; }
  .tn { background-position: -360px -312px; }
  .to { background-position: -384px -312px; }
  .tr { background-position: -0px -336px; }
  .tt { background-position: -24px -336px; }
  .tv { background-position: -48px -336px; }
  .tw { background-position: -72px -336px; }
  .tz { background-position: -96px -336px; }
  .ua { background-position: -120px -336px; }
  .ug { background-position: -144px -336px; }
  .us { background-position: -168px -336px; }
  .uy { background-position: -192px -336px; }
  .uz { background-position: -216px -336px; }
  .va { background-position: -240px -336px; }
  .vc { background-position: -264px -336px; }
  .ve { background-position: -288px -336px; }
  .vg { background-position: -312px -336px; }
  .vi { background-position: -336px -336px; }
  .vn { background-position: -360px -336px; }
  .vu { background-position: -384px -336px; }
  * {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
  }
  .hide {
    display: none;
  }
  .v-hide {
    visibility: hidden;
  }
}
`;
