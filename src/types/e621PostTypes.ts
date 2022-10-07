export type E621PostData = {
	id: number;
	created_at: string;
	updated_at: string;
	file: {
		width: number;
		height: number;
		ext: string;
		size: number;
		md5: string;
		url: string;
	};
	preview: {
		width: number;
		height: number;
		url: string;
	};
	sample: {
		has: boolean;
		height: number;
		width: number;
		url: string;
		alternates: Record<string, {
			type: string;
			height: number;
			width: number;
			urls: Array<string | undefined>;
		}>;
	};
	score: Record<'up' | 'down' | 'total', number>;
	tags: Record<'general' | 'species' | 'character' | 'copyright' | 'artist' | 'invalid' | 'lore' | 'meta', string[]>;
	locked_tags: string[];
	change_seq: number;
	flags: Record<'pending' | 'flagged' | 'note_locked' | 'status_locked' | 'rating_locked' | 'deleted', boolean>;
	fav_count: number;
	sources: string[];
	pools: number[];
	relationships: {
		parent_id: number | undefined;
		has_children: boolean;
		has_active_children: boolean;
		children: number[];
	};
	approver_id: number | undefined;
	uploader_id: number;
	description: string;
	comment_count: number;
	is_favorited: boolean;
	has_notes: boolean;
	duration: number | undefined;
};

export type E621Json = {
	posts: E621PostData[];
};
export type E621RandomJson = {
	post: E621PostData;
};
