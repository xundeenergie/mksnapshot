var Lang = imports.lang;
var PopupMenu = imports.ui.popupMenu;
var St = imports.gi.St;
var Clutter = imports.gi.Clutter;
var Util = imports.misc.util;
var Gtk = imports.gi.Gtk;

var ExtensionSystem = imports.ui.extensionSystem;
var ExtensionUtils = imports.misc.extensionUtils;
var DisabledIcon = 'my-caffeine-off-symbolic';
//var DisabledIcon = 'gnome-spinner';

var PopupServiceItem = new Lang.Class({
    Name: 'PopupServiceItem',
    Extends: PopupMenu.PopupMenuItem,

    _init: function(text, active, params) {
        this.parent(text, active, params);

        this.actionButton = new St.Button({ 
		x_align: 1,
		reactive: true,
		can_focus: true,
		track_hover: true,
		accessible_name: 'restart',
		style_class: 'system-menu-action services-systemd-button-reload' });

        var icon = new St.Icon({ icon_name: DisabledIcon }) 
        this.actionButton.child = icon;
        this.actor.add(this.actionButton, { expand: false, x_align: St.Align.END });

        /*this.ejectButton = new St.Button({ x_align: 1,
                                             reactive: true,
                                             can_focus: true,
                                             track_hover: true,
                                             accessible_name: 'eject',
                                             style_class: 'system-menu-action services-systemd-button-reload' });

        this.ejectButton.child = new St.Icon({ icon_name: 'media-eject-symbolic' });
        this.actor.add(this.ejectButton, { expand: false, x_align: St.Align.END });*/
    }
});
