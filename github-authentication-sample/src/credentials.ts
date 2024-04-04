class RapBattle:
    def __init__(self, rapper1, rapper2):
        self.rapper1 = rapper1
        self.rapper2 = rapper2

    def get_winner(self):
        if self.rapper1.points > self.rapper2.points:
            return self.rapper1
        elif self.rapper1.points < self.rapper2.points:
            return self.rapper2

    def get_loser(self):
        if self.rapper1.points < self.rapper2.points:
            return self.rapper1
        elif self.rapper1.points > self.rapper2.points:
            return self.rapper2

    def get_draw(self):
        if self.rapper1.points == self.rapper2.points:
            return True
        else:
            return False

    def get_points(self):
        return self.rapper1.points, self.rapper2.points

    class Rapper:
        def __init__(self, name, points):
            self.name = name
            self.points = points
        