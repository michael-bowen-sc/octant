// Copyright (c) 2019 the Octant contributors. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
//

export interface ContentResponse {
  content: Content;
}

export interface Content {
  viewComponents: View[];
  title: View[];
  iconName?: string;
  iconSource?: string;
}

export interface Metadata {
  type: string;
  title?: View[];
  accessor?: string;
}

export interface View {
  metadata: Metadata;
}

export interface AnnotationsView extends View {
  config: {
    annotations: { [key: string]: string };
  };
}

export interface Alert {
  type: string;
  message: string;
}

export interface CardView extends View {
  config: {
    body: View;
    actions: Action[];
    alert?: Alert;
  };
}

export interface CardListView extends View {
  config: {
    cards: CardView[];
  };
}

export interface ContainerDef {
  name: string;
  image: string;
}

export interface ContainersView extends View {
  config: {
    containers: ContainerDef[];
  };
}

export interface GraphvizView {
  config: {
    dot: string;
  };
}

export interface FlexLayoutItem {
  width: number;
  view: View;
}

export interface Confirmation {
  title: string;
  body: string;
}

export interface Button {
  payload: {};
  name: string;
  confirmation?: Confirmation;
}

export interface ButtonGroupView extends View {
  config: {
    buttons: Button[];
  };
}

export interface FlexLayoutView extends View {
  config: {
    sections: FlexLayoutItem[][];
    buttonGroup: ButtonGroupView;
  };
}

export interface LabelsView extends View {
  config: {
    labels: { [key: string]: string };
  };
}

export interface LinkView extends View {
  config: {
    ref: string;
    value: string;
  };
}

export interface ListView extends View {
  config: {
    iconName: string;
    items: View[];
  };
}

export interface ExpressionSelectorView extends View {
  config: {
    key: string;
    operator: string;
    values: string[];
  };
}

export interface LabelSelectorView extends View {
  config: {
    key: string;
    value: string;
  };
}

export interface PodSummary {
  details: View[];
  status: string;
}

export interface PodStatusView extends View {
  config: {
    pods: { [key: string]: PodSummary };
  };
}

export interface PortForwardPortSpec {
  local: number;
  remote: number;
}

export interface PortForwardTarget {
  apiVersion: string;
  kind: string;
  namespace: string;
  name: string;
}

export interface PortForwardView extends View {
  config: {
    text: string;
    id: string;
    action: string;
    status: string;
    ports: PortForwardPortSpec[];
    target: PortForwardTarget;
  };
}

export interface QuadrantValue {
  value: string;
  label: string;
}

export interface QuadrantView extends View {
  config: {
    nw: QuadrantValue;
    ne: QuadrantValue;
    sw: QuadrantValue;
    se: QuadrantValue;
  };
}

export interface Edge {
  node: string;
  edge: string;
}

export interface Node {
  name: string;
  apiVersion: string;
  kind: string;
  status: string;
  details: View;
  path: LinkView;
}

export interface ResourceViewerView extends View {
  config: {
    edges: { [key: string]: Edge[] };
    nodes: Node[];
    selected: string;
  };
}

export interface SelectorsView extends View {
  config: {
    selectors: Array<ExpressionSelectorView | LabelSelectorView>;
  };
}

export interface SummaryItem {
  header: string;
  content: View;
}

export interface ActionField {
  configuration: any;
  label: string;
  name: string;
  type: string;
  value: any;
}

export interface ActionForm {
  fields: ActionField[];
}

export interface Action {
  name: string;
  title: string;
  form: ActionForm;
}

export interface SummaryView extends View {
  config: {
    sections: SummaryItem[];
    actions: Action[];
    alert?: Alert;
  };
}

export interface TableView extends View {
  config: {
    columns: TableColumn[];
    rows: TableRow[];
    emptyContent: string;
    loading: boolean;
    filters: TableFilters;
  };
}

export interface TableFilters {
  [key: string]: TableFilter;
}

export interface TableFilter {
  values: string[];
  selected: string[];
}

export interface TableRow {
  [key: string]: View;
}

export interface TableColumn {
  name: string;
  accessor: string;
}

export interface TextView extends View {
  config: {
    value: string;
    isMarkdown?: boolean;
  };
}

export interface TimestampView extends View {
  config: {
    timestamp: number;
  };
}

export interface YAMLView extends View {
  config: {
    data: string;
  };
}

export interface LogsView extends View {
  config: {
    namespace: string;
    name: string;
    containers: string[];
  };
}

export interface LogEntry {
  timestamp: string; // TODO: should be Date
  message: string;
}

export interface LogResponse {
  entries: LogEntry[];
}

export interface Port extends View {
  config: {
    namespace: string;
    apiVersion: string;
    kind: string;
    name: string;
    port: number;
    protocol: string;
    state: Partial<{
      id: string;
      isForwarded: boolean;
      isForwardable: boolean;
      port: number;
    }>;
  };
}

export interface PortsView extends View {
  config: {
    ports: Port[];
  };
}

export interface LoadingView extends View {
  config: {
    value: string;
  };
}

export interface ErrorView extends View {
  config: {
    data: string;
  };
}

export interface IFrameView extends View {
  config: {
    url: string;
    title: string;
  };
}
