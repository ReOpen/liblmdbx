/*
@licstart  The following is the entire license notice for the
JavaScript code in this file.

Copyright (C) 1997-2019 by Dimitri van Heesch

This program is free software; you can redistribute it and/or modify
it under the terms of version 2 of the GNU General Public License as published by
the Free Software Foundation

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

@licend  The above is the entire license notice
for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "libmdbx", "index.html", [
    [ "Overall", "index.html", [
      [ "Brief", "index.html#brief", null ],
      [ "Table of Contents", "index.html#toc", null ],
      [ "MithrilDB", "index.html#MithrilDB", null ],
      [ "History", "index.html#autotoc_md1", [
        [ "Acknowledgments", "index.html#autotoc_md2", null ]
      ] ],
      [ "Contributors", "index.html#autotoc_md3", null ],
      [ "License", "index.html#autotoc_md4", null ]
    ] ],
    [ "Introduction", "intro.html", [
      [ "Characteristics", "intro.html#characteristics", [
        [ "Preface", "intro.html#preface", null ],
        [ "Features", "intro.html#autotoc_md5", null ],
        [ "Limitations", "intro.html#autotoc_md6", null ],
        [ "Gotchas", "intro.html#autotoc_md7", null ],
        [ "Comparison with other databases", "intro.html#autotoc_md8", null ]
      ] ],
      [ "Improvements beyond LMDB", "intro.html#autotoc_md9", [
        [ "Added Features", "intro.html#autotoc_md10", null ],
        [ "Other fixes and specifics", "intro.html#autotoc_md11", null ]
      ] ],
      [ "Restrictions & Caveats", "intro.html#restrictions", [
        [ "Troubleshooting the LCK-file", "intro.html#autotoc_md12", null ],
        [ "Remote filesystems", "intro.html#autotoc_md13", null ],
        [ "Child processes", "intro.html#autotoc_md14", null ],
        [ "Read-only mode", "intro.html#autotoc_md15", null ],
        [ "One thread - One transaction", "intro.html#autotoc_md16", null ],
        [ "Do not open twice", "intro.html#autotoc_md17", null ],
        [ "Long-lived read transactions", "intro.html#long-lived-read", null ],
        [ "Large data items and huge transactions", "intro.html#autotoc_md18", null ],
        [ "Space reservation", "intro.html#autotoc_md19", null ]
      ] ],
      [ "Performance comparison", "intro.html#performance", [
        [ "Integral performance", "intro.html#autotoc_md20", null ],
        [ "Read Scalability", "intro.html#autotoc_md22", null ],
        [ "Sync-write mode", "intro.html#autotoc_md24", null ],
        [ "Lazy-write mode", "intro.html#autotoc_md26", null ],
        [ "Async-write mode", "intro.html#autotoc_md28", null ],
        [ "Cost comparison", "intro.html#autotoc_md30", null ]
      ] ]
    ] ],
    [ "Usage", "usage.html", [
      [ "Building & Embedding", "usage.html#getting", [
        [ "Never use tarballs nor zips automatically provided by Github !", "usage.html#autotoc_md31", null ],
        [ "Source code embedding", "usage.html#autotoc_md32", null ],
        [ "Building and Testing", "usage.html#autotoc_md33", [
          [ "Testing", "usage.html#autotoc_md34", null ],
          [ "Common important details", "usage.html#autotoc_md35", [
            [ "Build reproducibility", "usage.html#autotoc_md36", null ],
            [ "Containers", "usage.html#autotoc_md37", null ],
            [ "DSO/DLL unloading and destructors of Thread-Local-Storage objects", "usage.html#autotoc_md38", null ]
          ] ],
          [ "Linux and other platforms with GNU Make", "usage.html#autotoc_md39", null ],
          [ "FreeBSD and related platforms", "usage.html#autotoc_md40", null ],
          [ "Windows", "usage.html#autotoc_md41", null ],
          [ "Windows Subsystem for Linux", "usage.html#autotoc_md42", null ],
          [ "MacOS", "usage.html#autotoc_md43", null ],
          [ "Android", "usage.html#autotoc_md44", null ],
          [ "iOS", "usage.html#autotoc_md45", null ]
        ] ]
      ] ],
      [ "Getting started", "usage.html#starting", [
        [ "Cursors", "usage.html#Cursors", null ],
        [ "Summarizing the opening", "usage.html#autotoc_md46", null ],
        [ "Threads and processes", "usage.html#autotoc_md47", null ],
        [ "Transactions, rollbacks etc", "usage.html#autotoc_md48", null ],
        [ "Duplicate keys aka Multi-values", "usage.html#autotoc_md49", null ],
        [ "Some optimization", "usage.html#autotoc_md50", null ],
        [ "Cleaning up", "usage.html#autotoc_md51", null ],
        [ "Now read up on the full API!", "usage.html#autotoc_md52", null ]
      ] ],
      [ "Bindings", "usage.html#bindings", null ]
    ] ],
    [ "ChangeLog", "md__change_log.html", [
      [ "v0.11.7 (underway)", "md__change_log.html#autotoc_md60", null ],
      [ "v0.11.6 (scheduled for 2022-03-24)", "md__change_log.html#autotoc_md61", null ],
      [ "v0.11.5 at 2022-02-23", "md__change_log.html#autotoc_md62", null ],
      [ "v0.11.4 at 2022-02-02", "md__change_log.html#autotoc_md63", null ],
      [ "v0.11.3 at 2021-12-31", "md__change_log.html#autotoc_md64", null ],
      [ "v0.11.2 at 2021-12-02", "md__change_log.html#autotoc_md65", null ],
      [ "v0.11.1 at 2021-10-23", "md__change_log.html#autotoc_md66", [
        [ "TODO", "md__change_log.html#autotoc_md59", null ],
        [ "Backward compatibility break:", "md__change_log.html#autotoc_md67", null ]
      ] ],
      [ "v0.10.5 at 2021-10-13 (obsolete, please use v0.11.1)", "md__change_log.html#autotoc_md68", null ],
      [ "v0.10.4 at 2021-10-10", "md__change_log.html#autotoc_md69", null ],
      [ "v0.10.3 at 2021-08-27", "md__change_log.html#autotoc_md70", null ],
      [ "v0.10.2 at 2021-07-26", "md__change_log.html#autotoc_md71", null ],
      [ "v0.10.1 at 2021-06-01", "md__change_log.html#autotoc_md72", null ],
      [ "v0.10.0 at 2021-05-09", "md__change_log.html#autotoc_md73", null ],
      [ "v0.9.3 at 2021-02-02", "md__change_log.html#autotoc_md74", null ],
      [ "v0.9.2 at 2020-11-27", "md__change_log.html#autotoc_md75", null ],
      [ "v0.9.1 2020-09-30", "md__change_log.html#autotoc_md76", null ],
      [ "v0.9.0 2020-07-31 (not a release, but API changes)", "md__change_log.html#autotoc_md77", null ],
      [ "v0.8.2 2020-07-06", "md__change_log.html#autotoc_md78", null ],
      [ "v0.8.1 2020-06-12", "md__change_log.html#autotoc_md79", null ],
      [ "v0.8.0 2020-06-05", "md__change_log.html#autotoc_md80", null ],
      [ "v0.7.0 2020-03-18", "md__change_log.html#autotoc_md81", null ],
      [ "v0.6.0 2020-01-21", "md__change_log.html#autotoc_md82", null ],
      [ "v0.5.0 2019-12-31", "md__change_log.html#autotoc_md83", null ],
      [ "v0.4.0 2019-12-02", "md__change_log.html#autotoc_md84", null ]
    ] ],
    [ "Deprecated List", "deprecated.html", null ],
    [ "Modules", "modules.html", "modules" ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", null ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", null ],
        [ "Related Functions", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", null ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
".html",
"classmdbx_1_1env.html#a97644bb1dfc3ded8f70d8c1d924296d0",
"globals_t.html",
"group__c__api.html#gaaf0e4c9dc12dce0c2a98566436c94222",
"group__c__debug.html#gga7d1aeb940f23f658bcb4cd845b1671a3afb254924dfd2c470bb6b9aff1bc5f7b1",
"group__c__settings.html#gabc6cbea17093abce0a055871492faf39",
"mdbx_8h_09_09.html#a06b4df2e16f77c1707828dbc8bb06fb3",
"struct_m_d_b_x__envinfo.html#ae4e046a4965798631d8ebc78b7810ebc",
"structmdbx_1_1slice.html#a4fe0310c3746965f092f30de6807c2c6"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';